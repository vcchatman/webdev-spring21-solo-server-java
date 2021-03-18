package com.example.wbdvsp2103vcchatmanserverjava.controllers;

import com.example.wbdvsp2103vcchatmanserverjava.models.Widget;
import com.example.wbdvsp2103vcchatmanserverjava.services.WidgetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController // this annotation makes all the content in this class accessible through HTTP
public class WidgetController {

    // dependency injection
    @Autowired
    WidgetService service;

    @GetMapping("/find/all/widgets")
    public List<Widget> findAllWidgets() {
        return service.findAllWidgets();
    }
}
