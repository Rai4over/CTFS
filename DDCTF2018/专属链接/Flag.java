package com.didichuxing.ctf.model;

public class Flag
{
  private Integer id;
  private String uuid;
  private String email;
  private String originEmail;
  private String flag;
  private String originFlag;
  
  public String getUuid()
  {
    return this.uuid;
  }
  
  public void setUuid(String uuid)
  {
    this.uuid = uuid;
  }
  
  public String getOriginEmail()
  {
    return this.originEmail;
  }
  
  public void setOriginEmail(String originEmail)
  {
    this.originEmail = originEmail;
  }
  
  public Integer getId()
  {
    return this.id;
  }
  
  public void setId(Integer id)
  {
    this.id = id;
  }
  
  public String getEmail()
  {
    return this.email;
  }
  
  public void setEmail(String email)
  {
    this.email = email;
  }
  
  public String getFlag()
  {
    return this.flag;
  }
  
  public void setFlag(String flag)
  {
    this.flag = flag;
  }
  
  public String getOriginFlag()
  {
    return this.originFlag;
  }
  
  public void setOriginFlag(String originFlag)
  {
    this.originFlag = originFlag;
  }
  
  public String toString()
  {
    return "Flag{id=" + this.id + ", uuid='" + this.uuid + '\'' + ", email='" + this.email + '\'' + ", originEmail='" + this.originEmail + '\'' + ", flag='" + this.flag + '\'' + ", originFlag='" + this.originFlag + '\'' + '}';
  }
}
