def foo (limit)
    sum = 0
    for n in 0..limit
        if (n % 3 == 0 || n % 5 == 0)
            sum += n
        end
    end

    sum
end

puts foo(1000)