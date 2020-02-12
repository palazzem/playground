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
    println!("Double value: {}", number * 2);

    // Float representation: 0.2 + 0.1 = 0.30000000000000004
    println!("0.2 + 0.1 = {}", 0.2 + 0.1);
}
