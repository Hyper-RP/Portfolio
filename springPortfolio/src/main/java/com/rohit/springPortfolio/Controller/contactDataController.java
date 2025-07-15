package com.rohit.springPortfolio.Controller;

import com.rohit.springPortfolio.Model.contactData;
import com.rohit.springPortfolio.Service.contactDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class contactDataController {

//    @Autowired
//    private contactData contactDataObj;

    @Autowired
    private contactDataService contactDataServiceObj;

    @GetMapping("allMessages")
    public List<contactData> allMessages(){
        return contactDataServiceObj.allMessages();
    }

    @PostMapping("/submitForm")
    public String submitForm(@RequestBody contactData contactDataObj){
        contactDataServiceObj.add(contactDataObj);
        return "Contact form sent SuccessFully...";
    }

    @DeleteMapping("/deleteFormById/{Id}")
    public String deleteFormById(@PathVariable int Id){
        contactDataServiceObj.deleteById(Id);
        return "Contact form deleted !!!";
    }




}
