describe("jest test",()=>{
    test('test common func',()=>{
        expect(1).toBe(1);
        expect('test').toBe('test');
        const a ={name:"zhangsan"};
        expect(a).toBe(a);
        // expect({name:"wenbin"}).toBe({name:"wenbin"});
        expect({name:"wenbin"}).toEqual({name:"wenbin"});
        expect([1,2,3,{name:'wenbin'}]).toEqual([1,2,3,{name:'wenbin'}]);
        expect(10).toBeGreaterThan(9) //大于9
        expect( 0.1 + 0.2).toBeCloseTo(0.3) //解决精度问题
        expect('abcd').toMatch(/ab/) //匹配字符串
        expect([1,2]).toContain(1) //数组或者集合是否包含某个数
        expect(()=>{throw new Error('123')}).toThrow() //抛出异常, 没有toThrow不会抛出异常
        expect(()=>{throw new Error('789999991235555')}).toThrow('123') //是否抛出123异常，是的话测试通过
        // expect(0).toBeTruthy();
        const value = 0.1 + 0.2;
        // expect(value).toBe(0.3);
        expect(value).toBeCloseTo(0.3); // 这句可以运行\n'
        expect.assertions(12);
    });
});



describe("jest test",()=>{
    test('test common func',()=>{
        expect(1).toBe(1);
        expect.assertions(1);
    });
});