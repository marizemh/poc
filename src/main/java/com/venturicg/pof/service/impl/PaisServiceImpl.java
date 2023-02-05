package com.venturicg.pof.service.impl;

import com.venturicg.pof.repository.PaisDAO;
import com.venturicg.pof.service.PaisesService;
import com.venturicg.pof.service.model.Pais;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaisServiceImpl implements PaisesService {

    @Autowired
    private PaisDAO paisDAO;


    @Override
    public List<Pais> obtenerPaises() {
        return paisDAO.obtenerPaises();
    }
}
