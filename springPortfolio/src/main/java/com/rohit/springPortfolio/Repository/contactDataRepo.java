package com.rohit.springPortfolio.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.rohit.springPortfolio.Model.contactData;

@Repository
public interface contactDataRepo extends JpaRepository<contactData,Integer> {

}
