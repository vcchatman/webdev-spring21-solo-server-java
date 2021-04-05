package com.example.wbdvsp2103vcchatmanserverjava.repositories;

import com.example.wbdvsp2103vcchatmanserverjava.models.Widget;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

// <Widget> is called parameterizing it
public interface WidgetRepository
        extends CrudRepository<Widget, Long> {
    @Query(value="SELECT * FROM widgets", nativeQuery = true)
    public List<Widget> findAllWidgets();

    @Query(value="SELECT * FROM widgets WHERE id=:wid", nativeQuery = true)
    public Widget findWidgetByID(@Param("wid") Long widgetId);

    @Query(value="SELECT * FROM widgets WHERE topic_id=:tid", nativeQuery = true)
    public List<Widget> findWidgetsForTopic(@Param("tid") String topicId);
}
