package Asng_day2;

public class PrimeNum {
    public static void main(String[] args) {

        int[] arr = {2, 5, 8, 11, 15, 17, 4, 7, 51};

        System.out.println("Prime numbers are:");

        for (int i = 0; i < arr.length; i++) {
            int num = arr[i];
            boolean prime = true;

            if (num <= 1)
                prime = false;

            for (int j = 2; j <= num / 2; j++) {
                if (num % j == 0) {
                    prime = false;
                    break;
                }
            }

            if (prime)
                System.out.print(num + " ");
        }
    }
}