package com.didichuxing.ctf.dao;

import com.didichuxing.ctf.model.Flag;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

@Repository
public abstract interface FlagDao
{
  public abstract void update(Flag paramFlag)
    throws Exception;
  
  public abstract void save(Flag paramFlag)
    throws Exception;
  
  public abstract Flag getByEmail(String paramString)
    throws Exception;
  
  public abstract Flag getByUUID(String paramString)
    throws Exception;
  
  public abstract int exist(String paramString)
    throws Exception;
  
  public abstract void deleteAll()
    throws Exception;
  
  public abstract int count()
    throws Exception;
  
  public abstract Flag getFirst(@Param("start") int paramInt1, @Param("end") int paramInt2, @Param("col") String paramString1, @Param("mode") String paramString2)
    throws Exception;
}
