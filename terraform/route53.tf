data "aws_route53_zone" "maxgallo_io" {
  name = "maxgallo.io"
}

resource "aws_route53_record" "buildingmfe_maxgallo_io" {
  zone_id = data.aws_route53_zone.maxgallo_io.zone_id

  name = local.public_domain
  type = "A"

  alias {
    name                   = aws_cloudfront_distribution.building_mfe.domain_name
    zone_id                = aws_cloudfront_distribution.building_mfe.hosted_zone_id
    evaluate_target_health = true
  }
}

