use std::io;

fn main() {
    // Integer check for overflow
    println!("Insert an integer number:");
    let mut number = String::new();
    io::stdin().read_line(&mut number).expect("Darn!");
    let number: u8 = match number.trim().parse() {
        Ok(num) => num,
        Err(_) => 0,
    };
    println!("Double value: {}", multiply_value(number));

    // Float representation: 0.2 + 0.1 = 0.30000000000000004
    println!("0.2 + 0.1 = {}", 0.2 + 0.1);

    // Tuple representation, using a pattern matching
    let tup = (500, "Hello!", 60.5);
    let (x, y, z) = tup;
    println!("Tuple: {}, {}, {}", x, y, z);

    // Arrays
    let _array = [1, 2, 3, 4, 5];
    let _typed_array: [u64; 5] = [1, 2, 3, 4, 5];
}

fn multiply_value(x: u8) -> u8 {
    return x * 2;
}
