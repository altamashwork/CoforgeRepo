package Asng_day2;

public class CountOuccurence {

	    public static void main(String[] args) {

	        int[] arr = {2, 5, 2, 7, 2, 9};
	        int key = 2;
	        int count = 0;

	        for (int i = 0; i < arr.length; i++) {
	            if (arr[i] == key)
	                count++;
	        }

	        System.out.println("Count = " + count);
	    }
	}