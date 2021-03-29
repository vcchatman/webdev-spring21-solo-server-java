package com.example.wbdvsp2103vcchatmanserverjava.models;

import javax.persistence.*;

// below annotates that we are intending to map this class to an equivalent table in  the database we have configured in our properties file
@Entity
@Table(name="widgets")
public class Widget {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String topicId;
    private String type;
    private Integer size;
    private Integer width;
    private Integer height;
    private String text;
    private String name;

    public Widget(Long id, String topicId, String type, Integer size, Integer width, Integer height, String text) {
        this.id = id;
        this.topicId = topicId;
        this.type = type;
        this.size = size;
        this.width = width;
        this.height = height;
        this.text = text;
    }

    public Widget() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTopicId() {
        return topicId;
    }

    public void setTopicId(String topicId) {
        this.topicId = topicId;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getSize() {
        return size;
    }

    public void setSize(Integer size) {
        this.size = size;
    }

    public Integer getWidth() {
        return width;
    }

    public void setWidth(Integer width) {
        this.width = width;
    }

    public Integer getHeight() {
        return height;
    }

    public void setHeight(Integer height) {
        this.height = height;
    }
    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

//    create table widget (
//        id bigint not null,
//        height integer,
//        size integer,
//        text varchar(255),
//    topic_id varchar(255),
//    type varchar(255),
//    width integer,
//    primary key (id)
//    ) engine=InnoDB

//    create table widgets (
//        id bigint not null auto_increment,
//        height integer,
//        size integer,
//        text varchar(255),
//    topic_id varchar(255),
//    type varchar(255),
//    width integer,
//    primary key (id)
//    ) engine=InnoDB

//    alter table widgets
//        add column name varchar(255)