#Mocha
javascript测试框架

开发者只需要在Mocha提供的全局函数中编写测试并且运行，就可以生成精美的测试报告。
如果测试脚本中包含异常错误，Mocha还会将错误堆栈输出都测试报告中，方便开发者定位修复。

    一个简单的测试脚本就像这样：
    describe('reducers',()=>{
      describe('counter',()=>{
        it('should handle initial state' ,()=>{
            expect(counter(undefined,{})),toBe(0);
        })
      })
    })
核心是describe和it两个全局函数。    

-  describe函数被用来包裹一组相关的测试。第一个参数是这组测试的描述，第二个参数是一个实际执行的函数。
-  it函数用于爆过一个单独的测试。第一个参数是名称，第二个参数是一个实际执行的函数。


# Enzyme 主要是渲染界面和提供操作。
