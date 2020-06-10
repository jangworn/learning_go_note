(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{248:function(t,s,a){t.exports=a.p+"assets/img/go24272.548dddae.png"},249:function(t,s,a){t.exports=a.p+"assets/img/go24285.1908478a.png"},250:function(t,s,a){t.exports=a.p+"assets/img/go24620.e8e1ea1b.png"},251:function(t,s,a){t.exports=a.p+"assets/img/go24942.4e73e6ae.png"},252:function(t,s,a){t.exports=a.p+"assets/img/go25358.3cdb3edb.png"},253:function(t,s,a){t.exports=a.p+"assets/img/go25753.b1b97aa2.png"},254:function(t,s,a){t.exports=a.p+"assets/img/go25754.66e0a038.png"},255:function(t,s,a){t.exports=a.p+"assets/img/go25755.2a3eaa83.png"},256:function(t,s,a){t.exports=a.p+"assets/img/go25772.e7d7252a.png"},257:function(t,s,a){t.exports=a.p+"assets/img/go25788.9a53a3c5.png"},258:function(t,s,a){t.exports=a.p+"assets/img/go25825.7a0791b3.png"},259:function(t,s,a){t.exports=a.p+"assets/img/go25847.650aee1f.png"},307:function(t,s,a){"use strict";a.r(s);var n=a(28),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"_6-工程管理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-工程管理"}},[t._v("#")]),t._v(" 6. 工程管理")]),t._v(" "),n("p",[t._v("在实际的开发工作中，直接调用编译器进行编译和链接的场景是少而又少，因为在工程中不\n会简单到只有一个源代码文件，且源文件之间会有相互的依赖关系。如果这样一个文件一个文件逐步编译，那不亚于一场灾难。 Go 语言的设计者作为行业老将，自然不会忽略这一点。早期 Go 语言使用 makefile 作为临时方案，到了 Go 1 发布时引入了强大无比的 Go 命令行工具。")]),t._v(" "),n("p",[t._v("Go 命令行工具的革命性之处在于彻底消除了工程文件的概念，完全用目录结构和包名来推导工程结构和构建顺序。针对只有一个源文件的情况讨论工程管理看起来会比较多余，因为这可以直接用 go run 和 go build 搞定。下面我们将用一个更接近现实的虚拟项目来展示 Go 语言的基本工程管理方法。")]),t._v(" "),n("h2",{attrs:{id:"_6-1-工作区"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-工作区"}},[t._v("#")]),t._v(" 6.1 工作区")]),t._v(" "),n("h3",{attrs:{id:"_6-1-1-工作区介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-1-工作区介绍"}},[t._v("#")]),t._v(" 6.1.1 工作区介绍")]),t._v(" "),n("p",[t._v("Go 代码必须放在工作区中。工作区其实就是一个对应于特定工程的目录，它应包含 3 个子目录：src 目录、pkg 目录和 bin 目录。\nsrc 目录：用于以代码包的形式组织并保存 Go 源码文件。（比如：.go .c .h .s 等）\npkg 目录：用于存放经由 go install 命令构建安装后的代码包（包含 Go 库源码文件）的“.a”归档文件。\nbin 目录：与 pkg 目录类似，在通过 go install 命令完成安装后，保存由 Go 命令源码文件生成的可执行文件。")]),t._v(" "),n("p",[t._v("目录 src 用于包含所有的源代码，是 Go 命令行工具一个强制的规则，而 pkg 和 bin 则无需手动创建，如果必要 Go 命令行工具在构建过程中会自动创建这些目录。")]),t._v(" "),n("p",[t._v("需要特别注意的是，只有当环境变量 GOPATH 中只包含一个工作区的目录路径时，go install 命令才会把命令源码安装到当前工作区的 bin 目录下。若环境变量 GOPATH 中包含多个工作区的目录路径，像这样执行 go install 命令就会失效，此时必须设置环境变量 GOBIN。")]),t._v(" "),n("h3",{attrs:{id:"_6-1-2-gopath-设置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-2-gopath-设置"}},[t._v("#")]),t._v(" 6.1.2 GOPATH 设置")]),t._v(" "),n("p",[t._v("为了能够构建这个工程，需要先把所需工程的根目录加入到环境变量 GOPATH 中。否则，即使处于同一工作目录(工作区)，代码之间也无法通过绝对代码包路径完成调用。")]),t._v(" "),n("p",[t._v("在实际开发环境中，工作目录往往有多个。这些工作目录的目录路径都需要添加至 GOPATH。当有多个目录时，请注意分隔符，多个目录的时候 Windows 是分号，Linux 系统是冒号，当有多个 GOPATH 时，默认会将 go get 的内容放在第一个目录下。")]),t._v(" "),n("h2",{attrs:{id:"_6-2-包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-包"}},[t._v("#")]),t._v(" 6.2 包")]),t._v(" "),n("p",[t._v("所有 Go 语言的程序都会组织成若干组文件，每组文件被称为一个包。这样每个包的代码都可以作为很小的复用单元，被其他项目引用。")]),t._v(" "),n("p",[t._v("一个包的源代码保存在一个或多个以.go 为文件后缀名的源文件中，通常一个包所在目录路径的后缀是包的导入路径。")]),t._v(" "),n("h3",{attrs:{id:"_6-2-1-自定义包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-1-自定义包"}},[t._v("#")]),t._v(" 6.2.1 自定义包")]),t._v(" "),n("p",[t._v("对于一个较大的应用程序，我们应该将它的功能性分隔成逻辑的单元，分别在不同的包里实现。我们创建的的自定义包最好放在 GOPATH 的 src 目录下（或者 GOPATH src 的某个子目录）。")]),t._v(" "),n("p",[t._v("在 Go 语言中，代码包中的源码文件名可以是任意的。但是，这些任意名称的源码文件都必须以包声明语句作为文件中的第一行，每个包都对应一个独立的名字空间：\npackage calc")]),t._v(" "),n("p",[t._v("包中成员以名称⾸字母⼤⼩写决定访问权限：\npublic: ⾸字母⼤写，可被包外访问\nprivate: ⾸字母⼩写，仅包内成员可以访问")]),t._v(" "),n("p",[t._v("注意：同一个目录下不能定义不同的 package。")]),t._v(" "),n("h3",{attrs:{id:"_6-2-2-main-包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-2-main-包"}},[t._v("#")]),t._v(" 6.2.2 main 包")]),t._v(" "),n("p",[t._v("在 Go 语言里，命名为 main 的包具有特殊的含义。 Go 语言的编译程序会试图把这种名字的包编译为二进制可执行文件。所有用 Go 语言编译的可执行程序都必须有一个名叫 main 的包。一个可执行程序有且仅有一个 main 包。")]),t._v(" "),n("p",[t._v("当编译器发现某个包的名字为 main 时，它一定也会发现名为 main()的函数，否则不会创建可执行文件。 main()函数是程序的入口，所以，如果没有这个函数，程序就没有办法开始执行。程序编译时，会使用声明 main 包的代码所在的目录的目录名作为二进制可执行文件的文件名。")]),t._v(" "),n("h3",{attrs:{id:"_6-2-3-main-函数和-init-函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-3-main-函数和-init-函数"}},[t._v("#")]),t._v(" 6.2.3 main 函数和 init 函数")]),t._v(" "),n("p",[t._v("Go 里面有两个保留的函数：init 函数（能够应用于所有的 package）和 main 函数（只能应用于 package main）。这两个函数在定义时不能有任何的参数和返回值。虽然一个 package 里面可以写任意多个 init 函数，但这无论是对于可读性还是以后的可维护性来说，我们都强烈建议用户在一个 package 中每个文件只写一个 init 函数。")]),t._v(" "),n("p",[t._v("Go 程序会自动调用 init()和 main()，所以你不需要在任何地方调用这两个函数。每个 package 中的 init 函数都是可选的，但 package main 就必须包含一个 main 函数。")]),t._v(" "),n("p",[t._v("每个包可以包含任意多个 init 函数，这些函数都会在程序执行开始的时候被调用。所有被\n编译器发现的 init 函数都会安排在 main 函数之前执行。 init 函数用在设置包、初始化变量或者其他要在程序运行前优先完成的引导工作。")]),t._v(" "),n("p",[t._v("程序的初始化和执行都起始于 main 包。如果 main 包还导入了其它的包，那么就会在编译时将它们依次导入。\n有时一个包会被多个包同时导入，那么它只会被导入一次（例如很多包可能都会用到 fmt 包，但它只会被导入一次，因为没有必要导入多次）。")]),t._v(" "),n("p",[t._v("当一个包被导入时，如果该包还导入了其它的包，那么会先将其它包导入进来，然后再对这些包中的包级常量和变量进行初始化，接着执行 init 函数（如果有的话），依次类推。等所有被导入的包都加载完毕了，就会开始对 main 包中的包级常量和变量进行初始化，然后执行 main 包中的 init 函数（如果存在的话），最后执行 main 函数。下图详细地解释了整个执行过程：\n"),n("img",{attrs:{src:a(248),alt:"123"}}),t._v("\n示例代码目录结构：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(249),alt:"123"}})]),t._v(" "),n("p",[t._v("main.go 示例代码如下：")]),t._v(" "),n("div",{staticClass:"language-Go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// main.go")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    fmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"main.go main() is called"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    test"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Test")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("test.go 示例代码如下：")]),t._v(" "),n("div",{staticClass:"language-Go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//test.go")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" test\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    fmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test.go init() is called"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Test")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    fmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test.go Test() is called"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("运行结果：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(250),alt:"123"}})]),t._v(" "),n("h3",{attrs:{id:"_6-2-4-导入包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-4-导入包"}},[t._v("#")]),t._v(" 6.2.4 导入包")]),t._v(" "),n("p",[t._v("导入包需要使用关键字 import，它会告诉编译器你想引用该位置的包内的代码。包的路径可以是相对路径，也可以是绝对路径。")]),t._v(" "),n("div",{staticClass:"language-Go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//方法1")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"calc"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//方法2")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"calc"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("标准库中的包会在安装 Go 的位置找到。 Go 开发者创建的包会在 GOPATH 环境变量指定的目录里查找。GOPATH 指定的这些目录就是开发者的个人工作空间。")]),t._v(" "),n("p",[t._v("如果编译器查遍 GOPATH 也没有找到要导入的包，那么在试图对程序执行 run 或者 build\n的时候就会出错。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(251),alt:"123"}})]),t._v(" "),n("p",[t._v("注意：如果导入包之后，未调用其中的函数或者类型将会报出编译错误。")]),t._v(" "),n("h4",{attrs:{id:"_6-2-4-1-点操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-4-1-点操作"}},[t._v("#")]),t._v(" 6.2.4.1 点操作")]),t._v(" "),n("div",{staticClass:"language-Go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这个点操作的含义是这个包导入之后在你调用这个包的函数时，可以省略前缀的包名")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello go"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h4",{attrs:{id:"_6-2-4-2-别名操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-4-2-别名操作"}},[t._v("#")]),t._v(" 6.2.4.2 别名操作")]),t._v(" "),n("p",[t._v("在导⼊时，可指定包成员访问⽅式，⽐如对包重命名，以避免同名冲突：")]),t._v(" "),n("div",{staticClass:"language-Go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    io "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//fmt改为为io")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    io"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello go"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//通过io别名调用")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h4",{attrs:{id:"_6-2-4-3-操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-4-3-操作"}},[t._v("#")]),t._v(" 6.2.4.3 _操作")]),t._v(" "),n("p",[t._v("有时，用户可能需要导入一个包，但是不需要引用这个包的标识符。在这种情况，可以使用空白标识符_来重命名这个导入：")]),t._v(" "),n("div",{staticClass:"language-Go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("_操作其实是引入该包，而不直接使用包里面的函数，而是调用了该包里面的 init 函数。")]),t._v(" "),n("h2",{attrs:{id:"_6-3-测试案例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-测试案例"}},[t._v("#")]),t._v(" 6.3 测试案例")]),t._v(" "),n("h3",{attrs:{id:"_6-3-1-测试代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-1-测试代码"}},[t._v("#")]),t._v(" 6.3.1 测试代码")]),t._v(" "),n("p",[n("img",{attrs:{src:a(252),alt:"123"}})]),t._v(" "),n("p",[t._v("calc.go 代码如下：")]),t._v(" "),n("div",{staticClass:"language-Go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" calc\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//加")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Minus")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//减")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" b\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Multiply")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//乘")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" b\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Divide")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//除")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" b\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("main.go 代码如下：")]),t._v(" "),n("div",{staticClass:"language-Go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"calc"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    a "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" calc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    fmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a = "')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"_6-3-2-gopath-设置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-2-gopath-设置"}},[t._v("#")]),t._v(" 6.3.2 GOPATH 设置")]),t._v(" "),n("h4",{attrs:{id:"_6-3-2-1-windows"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-2-1-windows"}},[t._v("#")]),t._v(" 6.3.2.1 windows")]),t._v(" "),n("p",[n("img",{attrs:{src:a(253),alt:"123"}})]),t._v(" "),n("p",[n("img",{attrs:{src:a(254),alt:"123"}})]),t._v(" "),n("p",[n("img",{attrs:{src:a(255),alt:"123"}})]),t._v(" "),n("h4",{attrs:{id:"_6-3-2-2-linux"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-2-2-linux"}},[t._v("#")]),t._v(" 6.3.2.2 linux")]),t._v(" "),n("p",[n("img",{attrs:{src:a(256),alt:"123"}})]),t._v(" "),n("h3",{attrs:{id:"_6-3-3-编译运行程序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-3-编译运行程序"}},[t._v("#")]),t._v(" 6.3.3 编译运行程序")]),t._v(" "),n("p",[n("img",{attrs:{src:a(257),alt:"123"}})]),t._v(" "),n("h3",{attrs:{id:"_6-3-4-go-install-的使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-4-go-install-的使用"}},[t._v("#")]),t._v(" 6.3.4 go install 的使用")]),t._v(" "),n("p",[t._v("设置环境变量 GOBIN：\n"),n("img",{attrs:{src:a(258),alt:"123"}})]),t._v(" "),n("p",[t._v("在源码目录，敲 go install:\n"),n("img",{attrs:{src:a(259),alt:"123"}})])])}),[],!1,null,null,null);s.default=r.exports}}]);