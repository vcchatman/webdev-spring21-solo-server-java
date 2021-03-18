package com.example.wbdvsp2103vcchatmanserverjava.services;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

// Controller means I'm going to be mapped or bound to some URL
// Meaning I'm going to respond to incoming HTTP requests
// REST means I'm going to follow certain conventions and those URLS will
// follow a pattern

// HTTP - Hypertext Transfer Protocol (HTTP) is designed to enable
// communications between clients and servers
// HTTP request methods: GET, POST, PUT, HEAD, DELETE, PATCH, OPTIONS

@RestController
public class HelloService {
    @GetMapping("/hello")
    public String sayHi() {
        return "Hello World!";
    }

    @GetMapping("/add/{A}/{B}")
    public Integer add(
            @PathVariable("A") Integer a,
            @PathVariable("B") Integer b) {
        return a + b;
    }

    @GetMapping("/my/hello/object")
    public HelloObject getHelloObject() {
        HelloObject h = new HelloObject();
        h.setId(123);
        h.setName("My Hello Object");
        return h;
    }
}














