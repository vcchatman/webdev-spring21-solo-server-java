package com.example.wbdvsp2103vcchatmanserverjava.services;

import com.example.wbdvsp2103vcchatmanserverjava.models.Widget;
import com.example.wbdvsp2103vcchatmanserverjava.repositories.WidgetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class WidgetService {

    //    asking the infrastructure to fabricate one of these things.
    @Autowired
    WidgetRepository repository;

    private List<Widget> widgets = new ArrayList<Widget>();

    {
        Widget w1 = new Widget(123l, "ABC123", "HEADING", 1, 1, 2, "Welcome to Widget for topic ABC123");
        Widget w2 = new Widget(234l, "ABC123", "PARAGRAPH", 1, 2, 4, "Dummy text.");
        Widget w3 = new Widget(345l, "ABC234", "HEADING", 2, 4, 8, "Welcome to Widget for topic ABC234");
        Widget w4 = new Widget(456l, "ABC234", "PARAGRAPH", 1, 8, 16, "Dummy text.");
        Widget w5 = new Widget(567l, "ABC234", "PARAGRAPH", 1, 16, 32, "Dummy text.");

        widgets.add(w1);
        widgets.add(w2);
        widgets.add(w3);
        widgets.add(w4);
        widgets.add(w5);
    }

    public Widget createWidgetForTopic(String topicId, Widget widget) {
        return repository.save(widget);
//        widget.setTopicId(topicId);
//        widget.setId((new Date()).getTime());
//        widgets.add(widget);
//        return widget;
    }

    public List<Widget> findAllWidgets() {
        return repository.findAllWidgets();
//        return (List<Widget>) repository.findAll();
//        return widgets;
    }

    public List<Widget> findWidgetsForTopic(String topicId) {
        return repository.findWidgetsForTopic(topicId);
//        List<Widget> ws = new ArrayList<Widget>();
//        for (Widget w : widgets) {
//            if (w.getTopicId().equals(topicId)) {
//                ws.add(w);
//            }
//        }
//        return ws;
    }

    // this by itself returns a wrapper that can be used to gauge success
    // calling.get() will return the actual object we're seeking
    public Widget findWidgetById(Long id) {
        return repository.findWidgetByID(id);
//        return repository.findById(id).get();

//        for (Widget w : widgets) {
//            if (w.getId().equals(id)) {
//                return w;
//            }
//        }
//        return null;
    }

    public Integer deleteWidget(Long id) {
        repository.deleteById(id);
        return 1;
//        int index = -1;
//        for (int i = 0; i < widgets.size(); i++) {
//            if (widgets.get(i).getId().equals(id)) {
//                index = i;
//                widgets.remove(index);
//                return 1;
//            }
//        }
//        return -1;
    }

    public Integer updateWidget(Long id, Widget newWidget) {
        Widget originalWidget = findWidgetById(id);
        originalWidget.setText(newWidget.getText());
        repository.save(originalWidget);
        return 1;
//        for (int i = 0; i < widgets.size(); i++) {
//            if (widgets.get(i).getId().equals(id)) {
//                widgets.set(i, widget);
//                return 1;
//            }
//        }
//        return -1;
    }
}











