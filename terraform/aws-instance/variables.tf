variable "access_key" {}
variable "secret_key" {}
variable "region" {
    default = "eu-central-1"
}

variable "images" {
    default = {
        eu-central-1 = "ami-9bf712f4"
    }
}
