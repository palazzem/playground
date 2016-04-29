provider "aws" {
    access_key = "${var.access_key}"
    secret_key = "${var.secret_key}"
    region = "${var.region}"
}

resource "aws_instance" "micromachine" {
    ami = "${lookup(var.images, var.region)}"
    instance_type = "t2.nano"
}

resource "aws_instance" "autobot" {
    ami = "${lookup(var.images, var.region)}"
    instance_type = "t2.nano"
}
