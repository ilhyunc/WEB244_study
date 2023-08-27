void swap(int& a, int& b) {
    int c;
    c = a;
    a = b;
    b = c;
}

template<typename T>
void swap(T& a, T& b) {
    T c;
    c = a;
    a = b;
    b = c;
}

template <class T, int N>
class Array {
    T a[N];
public:
    T& operator[](int i) { return a[i]; } 
};

Array<int, 5> a, b;


static_cast<Type>(expression)
reinterpret_cast<Type>(expression)
const_cast<Type>(expression)
dynamic_cast<Type>(expression)

-------------------------------------------

static_cast<Type>(expression): This is a general-purpose cast used for implicit conversions between compatible types, such as numeric conversions or casting pointers within an inheritance hierarchy. It performs a compile-time type check to ensure type safety. However, it doesn't perform any runtime checks and can't be used for casting away constness.

reinterpret_cast<Type>(expression): This cast allows casting between unrelated types, such as converting a pointer to an integer or vice versa. It is a low-level cast and should be used with extreme caution because it bypasses type checking altogether. Using reinterpret_cast is generally considered dangerous and should be avoided in most situations.

const_cast<Type>(expression): This cast is specifically used for adding or removing const-qualification from a variable. It is typically used when you have a const pointer or reference to a variable and need to temporarily remove the const-qualification to modify the underlying value. Like reinterpret_cast, it should also be used with care and only when necessary.

dynamic_cast<Type>(expression): This cast is primarily used for safe downcasting in polymorphic class hierarchies. It performs a runtime check to ensure that the conversion is valid. If the conversion is not allowed (e.g., if the object isn't of the target type or if the class hierarchy isn't polymorphic), dynamic_cast returns a null pointer for pointers or throws a std::bad_cast exception for references.