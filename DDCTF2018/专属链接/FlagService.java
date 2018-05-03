package com.didichuxing.ctf.service;

import com.didichuxing.ctf.model.Flag;

public abstract interface FlagService
{
  public abstract Flag getFlagByEmail(String paramString);
  
  public abstract Flag getFlagByUUID(String paramString);
  
  public abstract Flag getFirst(int paramInt1, int paramInt2, String paramString1, String paramString2);
  
  public abstract void save(Flag paramFlag);
  
  public abstract void deleteAll();
  
  public abstract int exist(String paramString);
}
