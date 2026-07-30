package Asng_day2;

public class SecondMaximum {

    public static void main(String[] args) {

        int[] arr = {10, 50, 80, 40, 70};

        int max = arr[0];
        int secondMax = arr[0];

        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max)
                max = arr[i];
        }

        for (int i = 0; i < arr.length; i++) {
            if (arr[i] > secondMax && arr[i] < max)
                secondMax = arr[i];
        }

        System.out.println("Second Maximum = " + secondMax);
    }
}
