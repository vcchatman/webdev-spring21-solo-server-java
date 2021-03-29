package com.example.wbdvsp2103vcchatmanserverjava.repositories;

import com.example.wbdvsp2103vcchatmanserverjava.models.Widget;
import org.springframework.data.repository.CrudRepository;

// <Widget> is called parameterizing it
public interface WidgetRepository
        extends CrudRepository<Widget, Long> {
}
