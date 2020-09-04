resource "aws_api_gateway_rest_api" "building_mfe" {
  name        = "manning-building-micro-frontends-API"
  description = "Manning liveProject Building Microfrontend API"
}

resource "aws_api_gateway_stage" "building_mfe" {
  stage_name    = "production"
  rest_api_id   = aws_api_gateway_rest_api.building_mfe.id
  deployment_id = aws_api_gateway_deployment.building_mfe.id
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

# resource "aws_api_gateway_method_settings" "post_login_settings" {
  # rest_api_id = aws_api_gateway_rest_api.building_mfe.id
  # stage_name  = aws_api_gateway_stage.building_mfe.stage_name
  # method_path = "${aws_api_gateway_resource.login.path_part}/${aws_api_gateway_method.login.http_method}"

  # settings {
    # metrics_enabled = true
    # # logging_level        = "INFO"
    # caching_enabled = false
  # }
# }

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

# resource "aws_api_gateway_method_settings" "post_validate_settings" {
  # rest_api_id = aws_api_gateway_rest_api.building_mfe.id
  # stage_name  = aws_api_gateway_stage.building_mfe.stage_name
  # method_path = "${aws_api_gateway_resource.validate.path_part}/${aws_api_gateway_method.validate.http_method}"

  # settings {
    # metrics_enabled = true
    # # logging_level        = "INFO"
    # caching_enabled = false
  # }
# }

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
  path_part   = "mymusic"
}

resource "aws_api_gateway_method" "get_songs" {
  rest_api_id   = aws_api_gateway_rest_api.building_mfe.id
  resource_id   = aws_api_gateway_resource.songs.id
  http_method   = "GET"
  authorization = "NONE"
}

# resource "aws_api_gateway_method_settings" "get_songs_settings" {
  # rest_api_id = aws_api_gateway_rest_api.building_mfe.id
  # stage_name  = aws_api_gateway_stage.building_mfe.stage_name
  # method_path = "${aws_api_gateway_resource.songs.path_part}/${aws_api_gateway_method.songs.http_method}"

  # settings {
    # metrics_enabled = true
    # # logging_level        = "INFO"
    # caching_enabled = false
  # }
# }

resource "aws_api_gateway_integration" "get_songs_integration" {
  rest_api_id = aws_api_gateway_rest_api.building_mfe.id
  resource_id = aws_api_gateway_method.get_songs.resource_id
  http_method = aws_api_gateway_method.get_songs.http_method
  uri         = aws_lambda_function.building_mfe_api.invoke_arn

  integration_http_method = "POST"
  type                    = "AWS_PROXY"
}

// end of APIs

resource "aws_api_gateway_deployment" "building_mfe" {
  depends_on = [aws_api_gateway_integration.post_validate_integration, aws_api_gateway_integration.get_songs_integration, aws_api_gateway_integration.post_login_integration]
  rest_api_id = aws_api_gateway_rest_api.building_mfe.id

  stage_name = "production"
}

# resource "aws_api_gateway_domain_name" "emergency_room" {
# domain_name     = "er.maxgallo.io"
# certificate_arn = "arn:aws:acm:us-east-1:708961971619:certificate/051d4a2d-dee6-40d2-a545-a6fcf0dc76b0"
# }

# resource "aws_route53_record" "standings" {
# zone_id = "${data.aws_route53_zone.public_zone.id}"
# name = "${local.external_address}"
# type = "A"
# alias {
# name = "${aws_cloudfront_distribution.standings.domain_name}"
# zone_id = "${aws_cloudfront_distribution.standings.hosted_zone_id}"
# evaluate_target_health = false
# }
# }

output "base_url" {
  value = aws_api_gateway_deployment.building_mfe.invoke_url
}

