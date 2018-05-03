
import java.math.BigInteger;
import java.util.Random;

public class Test9 {
    static BigInteger two =new BigInteger("2");
    static BigInteger p = new BigInteger("11360738295177002998495384057893129964980131806509572927886675899422214174408333932150813939357279703161556767193621832795605708456628733877084015367497711");
    static BigInteger h= new BigInteger("7854998893567208831270627233155763658947405610938106998083991389307363085837028364154809577816577515021560985491707606165788274218742692875308216243966916");

    /*
     Alice write the below algorithm for encryption.
     The public key {p, h} is broadcasted to everyone.
    @param val: The plaintext to encrypt.
        We suppose val only contains lowercase letter {a-z} and numeric charactors, and is at most 256 charactors in length.
    */
    public static String pkEnc(String val){
        BigInteger[] ret = new BigInteger[2];
        BigInteger bVal=new BigInteger(val.toLowerCase(),36);
        BigInteger r =new BigInteger(new Random().nextInt()+"");
        ret[0]=two.modPow(r,p);
        ret[1]=h.modPow(r,p).multiply(bVal);
        return ret[0].toString(36)+"=="+ret[1].toString(36);
    }

    /* Alice write the below algorithm for decryption. x is her private key, which she will never let you know.
    */
    public static String skDec(String val,BigInteger x){
        if(!val.contains("==")){
            return null;
        }
        else {
            BigInteger val0=new BigInteger(val.split("==")[0],36);
            BigInteger val1=new BigInteger(val.split("==")[1],36);
            BigInteger s=val0.modPow(x,p).modInverse(p);
            return val1.multiply(s).mod(p).toString(36);
        }
    }
    

    public static void main(String[] args) throws Exception {
        System.out.println("You intercepted the following message, which is sent from Bob to Alice:");
        System.out.println("k68ogdlxpvcxobanrsw2krb7jzzfeovevwis6nyvhemlmbrmo072d4xb83qgfrp1u038d4ijhyxwg6oepsyo47ki5bfzetsi85k==axqn58dncg69x86zjhxmt2cqxd0rtthmw6e76lor18mtauzle3pt202od58lxg5j7ann8hy2ginhf15mzwp1r8aofxi9d56mhl5xcvy710jgvtvsf0621312bme3ntqge9j770glw28c7ptniuqrllsmvfbkhix0");
        System.out.println("Please figure out the plaintext!");
    }
}
//k68ogdlxpvcxobanrsw2krb7jzzfeovevwis6nyvhemlmbrmo072d4xb83qgfrp1u038d4ijhyxwg6oepsyo47ki5bfzetsi85k==axqn58dncg69x86zjhxmt2cqxd0rtthmw6e76lor18mtauzle3pt202od58lxg5j7ann8hy2ginhf15mzwp1r8aofxi9d56mhl5xcvy710jgvtvsf0621312bme3ntqge9j770glw28c7ptniuqrllsmvfbkhix0