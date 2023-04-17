# Cpp
<https://learn.microsoft.com/zh-cn/cpp/cpp>  
1.类型转换  
<https://learn.microsoft.com/zh-cn/cpp/cpp/type-conversions-and-type-safety-modern-cpp>  
static_cast  
用于仅在编译时检查的强制转换。
派生类指针 -> 基类指针 safe  
基类指针 -> 派生类指针 unsafe  
基本数据类型之间的转换 例如int->char unsafe  
把空指针转换成目标类型的空指针

const_cast  
用于转换掉变量的 const 性，或者将非 const 变量转换为 const。

dynamic_cast  
用于从指向基对象的指针到指向派生对象的指针的、安全且经过运行时检查的强制转换。 dynamic_cast 在向下转换方面比 static_cast 更安全，但运行时检查会产生一些开销。

reinterpret_cast  
用于无关类型（如指针类型和 int）之间的强制转换。
