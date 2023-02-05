package com.venturicg.pof.web.restcontroller;

import com.venturicg.pof.service.PaisesService;
import com.venturicg.pof.web.dto.PaisDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/rest/paises")
public class PaisRestController {

    @Autowired
    private PaisesService paisesService;

    @GetMapping("")
    public ResponseEntity<List<PaisDTO>> obtenerPaises() {
        return new ResponseEntity<>(paisesService.obtenerPaises().stream()
                .map(pais -> new PaisDTO(pais.getId(), pais.getNombre()))
                .collect(Collectors.toList()), HttpStatus.OK);
    }



}
