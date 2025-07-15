package com.rohit.springPortfolio.Model;
import jakarta.persistence.*;
import org.springframework.stereotype.Component;

@Component
@Entity
@Table(name = "ContactFormData")
public class contactData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;


    private String name;

    private String email;

    private String message;


    public String getName(){
        return name;
    }

    public String getEmail(){
        return email;
    }

    public String getMessage(){
        return message;
    }

    public int getId(){
        return Id;
    }

    public void setName(String name){
        this.name=name;
    }

    public void setEmail(String email){
        this.email=email;
    }

    public void setMessage(String message){
        this.message=message;
    }


}
