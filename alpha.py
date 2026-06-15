# alpha.py
# Reads alpha.txt and prints each line
# Simulates exterior input for globe setup

def read_alpha(file_path="alpha.txt"):
    try:
        with open(file_path, "r") as f:
            for line in f:
                print("Alpha branch note:", line.strip())
    except FileNotFoundError:
        print("alpha.txt not found")

def setup_globe(auto_rotate=True):
    print("Globe setup initialized.")
    if auto_rotate:
        print("Auto rotation enabled.")
    else:
        print("Auto rotation disabled.")

if __name__ == "__main__":
    read_alpha()
    setup_globe(auto_rotate=True)

