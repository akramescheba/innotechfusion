package com.innotechfusion.election.execption;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value=HttpStatus.NOT_FOUND)
public class EntityDontExistExeption extends RuntimeException{
	

}
