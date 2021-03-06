package edu.jmu.seven

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper
import edu.jmu.seven.entity.Account
import edu.jmu.seven.entity.Customer
import edu.jmu.seven.mapper.AccountMapper
import edu.jmu.seven.mapper.CustomerMapper
import edu.jmu.seven.mapper.MerchantMapper
import edu.jmu.seven.utils.SHAUtil
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import kotlin.random.Random


@SpringBootTest
class RealTimeOrderSystemApplicationTests {

    @Autowired
    lateinit var mapper: AccountMapper

    @Autowired
    lateinit var cmapper: CustomerMapper
    @Test
    fun insert() {
        mapper.insert(Account("user_16655554444", BCryptPasswordEncoder().encode("123456"), 1))
        cmapper.insert(Customer("user_16655554444", "err", "16655554444"))
    }
    @Test
    fun contextLoads() {
        // 对自动填充、逻辑删除、版本号进行数据库测试
        // Select All
        var res = mapper.selectList(null)
        res.forEach { println(it.toString()) }

        // Insert new, And the sha512's length is least 64
        val pwd = SHAUtil().SHA512("123456")
        println("$pwd : ${pwd?.length}")
        mapper.insert(Account("test_123456", pwd!!, 1))

        res = mapper.selectList(null)
        res.forEach { println(it.toString()) }

        mapper.deleteById("test_123456")


        res = mapper.selectList(null)
        res.forEach { println(it.toString()) }
    }


    @Autowired
    lateinit var merchantMapper: MerchantMapper
    @Autowired
    lateinit var accountMapper: AccountMapper
    @Test
    fun updateAccount() {
        val lists = merchantMapper.selectList(null)
        for (s in lists) {
            if( accountMapper.selectByName(s.m_id) == null ) {
                accountMapper.insert(Account(s.m_id, BCryptPasswordEncoder().encode(s.m_phone), 2))
            }
        }
    }

    @Test
    fun updatePassword() {
        accountMapper.insert(Account("test_admin", BCryptPasswordEncoder().encode("admins"), 9))
    }
    @Test
    fun udpPwd() {
        val a = accountMapper.selectByName("merchant_8995566")
        a?.password = BCryptPasswordEncoder().encode("123456")
        val qw = QueryWrapper<Account>().eq("username", "merchant_8995566")
        accountMapper.update(a, qw)
    }

    @Test
    fun printTest() {
        val ac = accountMapper.selectList(null)
        val cc = cmapper.selectList(null)
        val mc = merchantMapper.selectList(null)
        for( c in cc ) {
            val a = c.c_id
            val b = mc[ Random.nextInt(0, mc.size-1) ].m_id
            val e = Random.nextInt()
            val d = Random.nextInt(1, 200)
            println("$a $e $d $b")
        }
    }

}
