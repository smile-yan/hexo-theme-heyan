// 根据 $$ 将原内容分块
// 如果是奇数块则前后添加 $$ 符号
function dollarsHandle(data) {
     var math_blocks = data.split('$$')
     var newContent = ""
     if (math_blocks.length > 2) {
         math_blocks.forEach((one, i)=>{
            if (i % 2 === 1 ) {
                newContent += '<p>$$'
                newContent += one
                newContent += '$$</p>'
             } else {
                 newContent += one
             }
         })
        return newContent
     }
     return data 
}

// 在渲染前进行
hexo.extend.filter.register('before_post_render', data => {
    // 首先根据 ``` 划分为代码块与非代码块
    var blocks = data.content.split('```')
    blocks.forEach((block, i) => {
        // 如果是偶数块
        if (i % 2 === 0) {
            blocks[i] = dollarsHandle(block)
        }
    })
    
    // 除了最后一块，其他的都以 ``` 结尾
    if (blocks.length > 2) {
        var newDataContent = ""
        blocks.forEach((block, i)=>{
            newDataContent += block
            if (i < blocks.length-1) {
                newDataContent += "```"
            }
        })
        data.content = newDataContent
    } else {
        data.content = dollarsHandle(data.content)
    }
    return data;
  }, 5);