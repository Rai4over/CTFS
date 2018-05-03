package com.didichuxing.ctf.controller.user;

import com.didichuxing.ctf.model.Flag;
import com.didichuxing.ctf.service.FlagService;
import java.io.PrintStream;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping({"flag"})
public class FlagController
{
  @Autowired
  private FlagService flagService;
  
  @RequestMapping(value={"/getflag/{email:[0-9a-zA-Z']+}"}, method={org.springframework.web.bind.annotation.RequestMethod.POST})
  public String getFlag(@PathVariable("email") String email, ModelMap model)
  {
    Flag flag = this.flagService.getFlagByEmail(email);
    
    return "Encrypted flag : " + flag.getFlag();
  }
  
  @RequestMapping({"/testflag/{flag}"})
  public String submitFlag(@PathVariable("flag") String flag, ModelMap model)
  {
    String[] fs = flag.split("[{}]");
    Long longFlag = Long.valueOf(fs[1]);
    
    int i = this.flagService.exist(flag);
    if (i > 0) {
      return "pass!!!";
    }
    return "failed!!!";
  }
  
  private void init()
  {
    System.out.println("test");
  }
}
