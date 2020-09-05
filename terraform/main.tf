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
  version = "~> 3.0"
}
