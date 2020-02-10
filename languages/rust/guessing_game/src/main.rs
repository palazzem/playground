use rand::Rng;
use std::cmp::Ordering;
use std::io;

fn main() {
    // Generate random number
    let secret_number = rand::thread_rng().gen_range(1, 101);
    println!("Welcome to Guess the number!");

    loop {
        println!("Please input your guess: ");

        // Declare a variable as mutable in this scope
        // NOTE: instances of `String` type are mutable
        let mut guess = String::new();

        io::stdin()
            .read_line(&mut guess)
            .expect("Failed to read the line!");

        let guess: u32 = match guess.trim().parse() {
            Ok(num) => num,
            Err(_) => {
                println!("'{}' is not a valid number!", guess.trim());
                continue;
            }
        };

        // Match
        match guess.cmp(&secret_number) {
            Ordering::Less => println!("Too small!"),
            Ordering::Greater => println!("Too big!"),
            Ordering::Equal => {
                println!("You win!");
                break;
            }
        }
    }
}
