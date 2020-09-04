resource "aws_route53_record" "buildingmfe_maxgallo_io" {
  zone_id = "Z37AACCBRYV3CJ" // maxgallo.io

  # name    = "${aws_api_gateway_domain_name.emergency_room.domain_name}"
  name = local.public_domain
  type = "A"

  alias {
    name                   = aws_cloudfront_distribution.building_mfe.domain_name
    zone_id                = aws_cloudfront_distribution.building_mfe.hosted_zone_id
    evaluate_target_health = true
  }
}

