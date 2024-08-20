2 tables

Users
userId, email, password

### user can have multiple address
Address     
userId, city, state, pincode, country

# fetch the user details and their address having id = ID
select u.id, u.email, a.city, a.state, a.pincode, a.country from users u 
JOIN address a ON u.id = a.id
where u.id = ID


# Benefits of using join
Reduced latency                  // Instead of querying users table first and then address table WE CAN JUST QURRY ONE JOIN QUERY
Simplified application logic
Transactional integrity ->       // POSIBILITY THAT THE DATA CHANGES AFTER THE FIRST QUERY HENCE JOIN MAINTAINS THE TRANSACTIONAL INTEGRITY

# TYPES OF JOIN