terraform {
  backend "s3" {
    encrypt = true
    region  = "eu-west-2"
    bucket  = "708961971619-terraform-state"
    key     = "manning-building-microfrontends-api/terraform.tfstate"
    profile = "personal"
  }
}

variable "aws_region" {
  default = "eu-west-2"
}

provider "aws" {
  region  = var.aws_region
  profile = "personal"
  version = "~> 2.43"
}

# data "terraform_remote_state" "network" {
# backend = "s3"
# config = {
# region  = "eu-central-1"
# bucket  = "708961971619-terraform-state"
# key     = "pronto-soccorso-lazio/terraform.tfstate"
# profile = "personal"
# }
# }
# provider "aws" {
# alias   = "usEast"
# profile = "personal"
# region  = "us-east-1"
# version = "~> 1.60"
# }
# data "aws_acm_certificate" "maxgalloio" {
# domain      = "*.maxgallo.io"
# statuses    = ["ISSUED"]
# provider    = "aws.usEast"
# most_recent = true
# }
