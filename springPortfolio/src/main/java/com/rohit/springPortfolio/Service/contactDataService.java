package com.rohit.springPortfolio.Service;

import com.rohit.springPortfolio.Model.contactData;
import com.rohit.springPortfolio.Repository.contactDataRepo;
import jakarta.persistence.Id;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class contactDataService {

    @Autowired
    private contactDataRepo contactDataRepoObj;

    Map<Integer, contactData> contactDataMap=new HashMap<>();
    public void add(contactData contactDataobj){
        contactDataMap.put(contactDataobj.getId(),contactDataobj);
        contactDataRepoObj.save(contactDataobj);
    }

    public void deleteById(int id){
        contactDataMap.remove(id);
        contactDataRepoObj.deleteById(id);
    }

    public List<contactData> allMessages(){
//        return new ArrayList<>(contactDataMap.values());
        return contactDataRepoObj.findAll();
    }
}
