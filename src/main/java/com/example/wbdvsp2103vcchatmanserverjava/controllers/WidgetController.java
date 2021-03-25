// Controller is responsible for all things HTTP, not responsible for data
// The service is responsible for the data, knows nothing of HTTP

package com.example.wbdvsp2103vcchatmanserverjava.controllers;

import com.example.wbdvsp2103vcchatmanserverjava.models.Widget;
import com.example.wbdvsp2103vcchatmanserverjava.services.WidgetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController // this annotation makes all the content in this class accessible through HTTP
@CrossOrigin(origins = "*")
public class WidgetController {

    // dependency injection
    @Autowired
    WidgetService service;

    @PostMapping("/api/topics/{tid}/widgets")
    public Widget createWidgetForTopic(
            @PathVariable("tid") String topicId,
            @RequestBody Widget widget
    ) {
        return service.createWidgetForTopic(topicId, widget);
    }

    @GetMapping("/api/widgets")
    public List<Widget> findAllWidgets() {
        return service.findAllWidgets();
    }

    @GetMapping("/api/topics/{tid}/widgets")
    public List<Widget> findWidgetsForTopic(@PathVariable("tid") String topicId) {
        return service.findWidgetsForTopic(topicId);
    }

    @PutMapping("/api/widgets/{widgetId}")
    public Integer updateWidget(
            @PathVariable("widgetId") Long id,
            @RequestBody Widget widget) {
        return service.updateWidget(id, widget);
    }

    @DeleteMapping("/api/widgets/{widgetId}")
    public Integer deleteWidget(
            @PathVariable("widgetId") Long id) {
        return service.deleteWidget(id);
    }

}
