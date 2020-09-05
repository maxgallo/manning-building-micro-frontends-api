locals {
  public_domain             = "buildingmfe.maxgallo.io"
  api_gateway_invoke_domain = "${aws_api_gateway_rest_api.building_mfe.id}.execute-api.${var.aws_region}.amazonaws.com"
  api_gateway_origin_id     = "ApiGwId_${aws_api_gateway_rest_api.building_mfe.id}"
}

resource "aws_cloudfront_distribution" "building_mfe" {
  origin {
    domain_name = local.api_gateway_invoke_domain
    origin_id   = local.api_gateway_origin_id
    origin_path = "/${aws_api_gateway_stage.building_mfe.stage_name}"

    custom_origin_config {
      origin_protocol_policy = "https-only"
      http_port              = "80"
      https_port             = "443"
      origin_ssl_protocols   = ["TLSv1.1"]
    }
  }

  aliases         = [local.public_domain]
  enabled         = true
  is_ipv6_enabled = true
  price_class     = "PriceClass_100"

  default_cache_behavior {
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods   = ["GET", "HEAD", "OPTIONS"]
    target_origin_id = local.api_gateway_origin_id

    forwarded_values {
      query_string = true
      headers      = ["Authorization"]

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 60
    max_ttl                = 60
    compress               = true
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = "arn:aws:acm:us-east-1:708961971619:certificate/051d4a2d-dee6-40d2-a545-a6fcf0dc76b0"
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.1_2016"
  }
}

