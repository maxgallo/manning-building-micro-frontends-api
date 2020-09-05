resource "aws_api_gateway_rest_api" "building_mfe" {
  name        = "manning-building-micro-frontends-API"
  description = "Manning liveProject Building Microfrontend API"
}

resource "aws_api_gateway_resource" "api" {
  rest_api_id = aws_api_gateway_rest_api.building_mfe.id
  parent_id   = aws_api_gateway_rest_api.building_mfe.root_resource_id
  path_part   = "api"
}

// 1 of 3: Login
resource "aws_api_gateway_resource" "login" {
  rest_api_id = aws_api_gateway_rest_api.building_mfe.id
  parent_id   = aws_api_gateway_resource.api.id
  path_part   = "login"
}

resource "aws_api_gateway_method" "post_login" {
  rest_api_id   = aws_api_gateway_rest_api.building_mfe.id
  resource_id   = aws_api_gateway_resource.login.id
  http_method   = "POST"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "post_login_integration" {
  rest_api_id = aws_api_gateway_rest_api.building_mfe.id
  resource_id = aws_api_gateway_method.post_login.resource_id
  http_method = aws_api_gateway_method.post_login.http_method
  uri         = aws_lambda_function.building_mfe_api.invoke_arn

  integration_http_method = "POST"
  type                    = "AWS_PROXY"
}

// 2 of 3 - Validate Token
resource "aws_api_gateway_resource" "validate" {
  rest_api_id = aws_api_gateway_rest_api.building_mfe.id
  parent_id   = aws_api_gateway_resource.api.id
  path_part   = "validate"
}

resource "aws_api_gateway_method" "post_validate" {
  rest_api_id   = aws_api_gateway_rest_api.building_mfe.id
  resource_id   = aws_api_gateway_resource.validate.id
  http_method   = "POST"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "post_validate_integration" {
  rest_api_id = aws_api_gateway_rest_api.building_mfe.id
  resource_id = aws_api_gateway_method.post_validate.resource_id
  http_method = aws_api_gateway_method.post_validate.http_method
  uri         = aws_lambda_function.building_mfe_api.invoke_arn

  integration_http_method = "POST"
  type                    = "AWS_PROXY"
}


// 3 of 3: Songs
resource "aws_api_gateway_resource" "songs" {
  rest_api_id = aws_api_gateway_rest_api.building_mfe.id
  parent_id   = aws_api_gateway_resource.api.id
  path_part   = "songs"
}

resource "aws_api_gateway_method" "get_songs" {
  rest_api_id   = aws_api_gateway_rest_api.building_mfe.id
  resource_id   = aws_api_gateway_resource.songs.id
  http_method   = "GET"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "get_songs_integration" {
  rest_api_id = aws_api_gateway_rest_api.building_mfe.id
  resource_id = aws_api_gateway_method.get_songs.resource_id
  http_method = aws_api_gateway_method.get_songs.http_method
  uri         = aws_lambda_function.building_mfe_api.invoke_arn

  integration_http_method = "POST"
  type                    = "AWS_PROXY"
}
// end of APIs

// A note on "deployment and stage"
//
// As Sept 2020 there are some long-lasting issue "Stage already exists"
// The sequence that I think works is
// 1. terraform apply
// 2. manually delete "production" in console
// 3. run agin terraform apply

// Create a deployment of a specific stage
resource "aws_api_gateway_deployment" "building_mfe" {
  depends_on  = [aws_api_gateway_integration.post_validate_integration, aws_api_gateway_integration.get_songs_integration, aws_api_gateway_integration.post_login_integration]
  rest_api_id = aws_api_gateway_rest_api.building_mfe.id

  stage_name = "production"
  triggers = {
    redeployment = md5(file("api_gateway.tf"))
  }
}
// Create a stage, used in the deployment above
resource "aws_api_gateway_stage" "building_mfe" {
  stage_name    = "production"
  rest_api_id   = aws_api_gateway_rest_api.building_mfe.id
  deployment_id = aws_api_gateway_deployment.building_mfe.id
}

output "base_url" {
  value = aws_api_gateway_deployment.building_mfe.invoke_url
}

