package Asng_day2;

import java.util.Arrays;

public class MergeArray {

    public static void main(String[] args) {

        int[] a = {5, 2, 8};
        int[] b = {1, 7, 3};

        int[] c = new int[a.length + b.length];

        for (int i = 0; i < a.length; i++)
            c[i] = a[i];

        for (int i = 0; i < b.length; i++)
            c[a.length + i] = b[i];

        Arrays.sort(c);

        System.out.println("Merged Sorted Array:");

        for (int i = 0; i < c.length; i++)
            System.out.print(c[i] + " ");
    }
}