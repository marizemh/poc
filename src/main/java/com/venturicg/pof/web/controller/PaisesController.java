package com.venturicg.pof.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PaisesController {

    @RequestMapping("/paises")
    public String home() {
        return "paises";
    }
}
