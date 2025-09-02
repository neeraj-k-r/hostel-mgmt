    import listEndpoints from 'express-list-endpoints';
    import express, { request } from "express";
    import sql from "mssql";
    import cors from "cors";

    const app=express()
    const port=3000 

    app.use(cors());
    app.use(express.json());


    const sqlConfig={
        user:"SA",
        password:"@HelloWorld",
        database:"neeraj",
        server: '168.119.169.166',
        port : 1433,
        options: {
            encrypt: true, // for azure
            trustServerCertificate:true 
    }
    }

    async function getDbConnection() 
    {
        const conn=await new sql.connect(sqlConfig)
        return conn;    
    }
    
    app.listen(port,()=>{
        console.log("server listening on port", 3000)
    })



    app.get("/allstudents",async(req,res)=>{
        try{
            const connection=await getDbConnection()
            console.log(connection)
            const request=new sql.Request(connection)
            const query="select * from Students "
            const result=await request.query(query);
            res.json(result.recordset); // <-- add this

        }
        catch(error) {
            console.log(error);
            res.status(500).json({ error: error.message }); // send error back to client
        }

    })


    console.log("app is running(get)student")



    app.post("/allstudents",async(req,res)=>{
        const{student_id,full_name,dob,gender,phone,email,course,join_date,room_id}=req.body;
        console.log(req.body)

        try{
            const connection=await getDbConnection()
            console.log(connection)
            const request=new sql.Request(connection)

            await request
            .input('student_id',sql.Int,student_id)
            .input('full_name',sql.VarChar,full_name)
            .input('dob',sql.Date,dob)
            .input('gender',sql.VarChar,gender)
            .input('phone',sql.VarChar,phone)
            .input('email',sql.VarChar,email)
            .input('course',sql.VarChar,course)
            .input('join_date',sql.Date,join_date)
            .input('room_id',sql.Int,room_id)
            .query('INSERT INTO Students VALUES(@student_id,@full_name,@dob,@gender,@phone,@email,@course,@join_date,@room_id)');
            res.json('student item added');
        }
        catch(error) {
            console.log(error);
            res.status(500).json({ error: error.message }); // send error back to client
        } 
    });
    console.log('app is running(post)student')

    app.put("/allstudents",async(req,res)=>{
        const{student_id,full_name,dob,gender,phone,email,course,join_date,room_id}=req.body;
        console.log(req.body)

        try{
            const connection=await getDbConnection()
            console.log(connection)
            const request=new sql.Request(connection)

            await request
            .input('student_id',sql.Int,student_id)
            .input('full_name',sql.VarChar,full_name)
            .input('dob',sql.Date,dob)
            .input('gender',sql.VarChar,gender)
            .input('phone',sql.VarChar,phone)
            .input('email',sql.VarChar,email)
            .input('course',sql.VarChar,course)
            .input('join_date',sql.Date,join_date)
            .input('room_id',sql.Int,room_id)       
            .query('UPDATE Students SET full_name=@full_name,dob=@dob,gender=@gender,phone=@phone,email=@email,course=@course,join_date=@join_date,room_id=@room_id WHERE student_id=@student_id') 
            res.json('students updated')
        }
        catch(error) {
            console.log(error);
            res.status(500).json({ error: error.message }); // send error back to client
        }
    });
    console.log("app is runnig (put)student")

    app.delete("/allstudents",async(req,res)=>{
        const{student_id,full_name,dob,gender,phone,email,course,join_date,room_id}=req.body;
        console.log(req.body)

        try{
            const connection=await getDbConnection()
            console.log(connection)
            const request=new sql.Request(connection)

            await request
            .input('student_id',sql.Int,student_id)

            .query(`
                DELETE FROM Complaints WHERE student_id=@student_id;
                DELETE FROM Payments WHERE student_id=@student_id;
                DELETE FROM Students WHERE student_id=@student_id; 
            `);
            res.json('student deleted')
        }
        catch(error) {
            console.log(error);
            res.status(500).json({ error: error.message }); // send error back to client
        }
    });

    console.log("app is running(delete)student")




app.get("/allrooms",async(req,res)=>{
        try{
            const connection=await getDbConnection()
            const request=new sql.Request(connection)
            const query="select * from Rooms "
            const result=await request.query(query);
            res.json(result.recordset); // <-- add this

        }
        catch(error) {
            console.log(error);
            res.status(500).json({ error: error.message }); // send error back to client
        }

    })
    console.log("app is running(get)rooms")


app.post("/allrooms",async(req,res)=>{
        const { room_id, room_number, type, capacity, current_occupance, status, floor } = req.body;
        console.log(req.body)

        try{
            const connection=await getDbConnection()
            console.log(connection)
            const request=new sql.Request(connection)

            await request
            // .input('student_id',sql.Int,student_id)

            .input('room_id',sql.Int,room_id)
            .input('room_number',sql.VarChar,room_number)
            .input('type',sql.VarChar,type)
            .input('capacity',sql.Int,capacity)
            .input('current_occupance',sql.Int,current_occupance)
            .input('status',sql.VarChar,status)
            .input('floor',sql.Int,floor)
            .query('INSERT INTO Rooms VALUES(@room_id,@room_number,@type,@capacity,@current_occupance,@status,@floor)');
            res.json('room item added');
        }
        catch(error) {
            console.log(error);
            res.status(500).json({ error: error.message }); // send error back to client
        } 
    });
    console.log('app is running(post)roooms')





app.put("/allrooms",async(req,res)=>{
        const { room_id, room_number, type, capacity, current_occupance, status, floor } = req.body;
        console.log(req.body)

        try{
            const connection=await getDbConnection()
            console.log(connection)
            const request=new sql.Request(connection)

            await request
            // .input('student_id',sql.Int,student_id)

            .input('room_id',sql.Int,room_id)
            .input('room_number',sql.VarChar,room_number)
            .input('type',sql.VarChar,type)
            .input('capacity',sql.Int,capacity)
            .input('current_occupance',sql.Int,current_occupance)
            .input('status',sql.VarChar,status)
            .input('floor',sql.Int,floor)
            .query('UPDATE Rooms SET room_number=@room_number,type=@type,capacity=@capacity,current_occupance=@current_occupance,status=@status,floor=@floor WHERE room_id=@room_id');
            res.json('room item updated');
        }
        catch(error) {
            console.log(error);
            res.status(500).json({ error: error.message }); // send error back to client
        } 
    });
    console.log('app is running(put)roooms')





app.delete("/allrooms",async(req,res)=>{
    const { room_id} = req.body;
    console.log(req.body)

    try{
        const connection=await getDbConnection()
        console.log(connection)
        const request=new sql.Request(connection)

        await request
        .input('room_id',sql.Int,room_id)
            .query(`
            DELETE FROM Complaints WHERE student_id IN (SELECT student_id FROM Students WHERE room_id=@room_id);
            DELETE FROM Payments WHERE student_id IN (SELECT student_id FROM Students WHERE room_id=@room_id);
            DELETE FROM Students WHERE room_id=@room_id;
            DELETE FROM Rooms WHERE room_id=@room_id;
        `);
        res.json('room item updated');
    }
    catch(error) {
        console.log(error);
        res.status(500).json({ error: error.message }); // send error back to client
    } 
});
console.log('app is running(delete)roooms')



app.get("/allstaff",async(req,res)=>{
        try{
            const connection=await getDbConnection()
            const request=new sql.Request(connection)
            const query="select * from Staff "
            const result=await request.query(query);
            res.json(result.recordset); // <-- add this

        }
        catch(error) {
            console.log(error);
            res.status(500).json({ error: error.message }); // send error back to client
        }

    })
console.log('app is runnung(get)staff')


app.post("/allstaff",async(req,res)=>{
    const { staff_id,name,role,phone,email,shift } = req.body;
    console.log(req.body)

    try{
        const connection=await getDbConnection()
        console.log(connection)
        const request=new sql.Request(connection)

        await request
        .input('staff_id',sql.Int,staff_id)
        .input('name',sql.VarChar,name)
        .input('role',sql.VarChar,role)
        .input('phone',sql.VarChar,phone)
        .input('email',sql.VarChar,email)
        .input('shift',sql.VarChar,shift)
        .query('INSERT INTO Staff VALUES(@staff_id,@name,@role,@phone,@email,@shift)')
        res.json('Staff Item added')
    }

    catch(error){
        console.log(error)
        res.status(500).json({ error: error.message });
    }
})


app.put("/allstaff",async(req,res)=>{
    const { staff_id,name,role,phone,email,shift } = req.body;
    console.log(req.body)
    try{

        const connection=await getDbConnection()
        console.log(connection)
        const request=new sql.Request(connection)

        await request
        .input('staff_id',sql.Int,staff_id)
        .input('name',sql.VarChar,name)
        .input('role',sql.VarChar,role)
        .input('phone',sql.VarChar,phone)
        .input('email',sql.VarChar,email)
        .input('shift',sql.VarChar,shift)
        .query('UPDATE Staff SET name=@name,role=@role,phone=@phone,email=@email,shift=@shift WHERE staff_id=@staff_id')
        res.json('Staff Item deleted')
    }
    catch(error){
        console.log(error)
        res.status(500).json({ error: error.message });
    }
})
console.log('app is running(put)staff')

app.delete("/allstaff",async(req,res)=>{
    const { staff_id} = req.body;
    console.log(req.body)

    try{
        const connection=await getDbConnection()
        console.log(connection)
        const request=new sql.Request(connection)

        await request
        .input('staff_id',sql.Int,staff_id)
        .query('DELETE FROM STAFF WHERE staff_id=@staff_id')
        res.json('Staff item deleted')
    }
    catch(error){
        console.log(error)
        res.status(500).json({ error: error.message });
    }
})
console.log('app is running(delete)staff')




app.get("/allpayments",async(req,res)=>{
    try{

            const connection=await getDbConnection()
            console.log(connection)
            const request=new sql.Request(connection)
            const query="select * from Payments "
            const result=await request.query(query);
            res.json(result.recordset); // <-- add this

        }
        catch(error) {
                console.log(error);
                res.status(500).json({ error: error.message }); // send error back to client
        }

})
console.log('app is runnung(get)payments')


app.post("/allpayments",async(req,res)=>{
    const{payment_id,student_id,amount,payment_date,payment_mode,status}=req.body
    console.log(req.body)
    try{
       const connection=await getDbConnection()
       console.log(connection)
       const request=new sql.Request(connection) 
       await request
       .input('payment_id',sql.Int,payment_id)
       .input('student_id',sql.Int,student_id)
       .input("amount", sql.Decimal(10, 2), amount) 
       .input('payment_date',sql.Date,payment_date)
       .input('payment_mode',sql.VarChar,payment_mode)
       .input('status',sql.VarChar,status)
       .query('INSERT INTO Payments VALUES(@payment_id,@student_id,@amount,@payment_date,@payment_mode,@status)')
       res.json('Payment values added')
    }
    catch(error){
        console.log(error)
        res.status(500).json({ error: error.message });
    }
})
console.log('app is running(post)payments')


app.put("/allpayments",async(req,res)=>{
    const{payment_id,student_id,amount,payment_date,payment_mode,status}=req.body
    console.log(req.body)
    try{
        const connection=await getDbConnection()
        console.log(connection)
        const request=new sql.Request(connection)
        await request
        .input('payment_id',sql.Int,payment_id)
       .input('student_id',sql.Int,student_id)
       .input("amount", sql.Decimal(10, 2), amount) 
       .input('payment_date',sql.Date,payment_date)
       .input('payment_mode',sql.VarChar,payment_mode)
       .input('status',sql.VarChar,status)
       .query('UPDATE Payments SET student_id=@student_id,amount=@amount,payment_date=@payment_date,payment_mode=@payment_mode,status=@status WHERE payment_id=@payment_id')
        res.json('Payment values updated')
    }
    catch(error){
        console.log(req.body)
        res.status(500).json({error:error.message});
    }
})
console.log("app is running(put)payments")
    

app.delete("/allpayments",async(req,res)=>{
    const{payment_id}=req.body
    console.log(req.body)
    try{
        const connection=await getDbConnection()
        console.log(connection)
        const request=new sql.Request(connection)
        await request
        .input('payment_id',sql.Int,payment_id)
        .query('DELETE FROM Payments WHERE payment_id=@payment_id')
        res.json('Payment value deleted')
    }
    catch(error){
        console.log(error)
        res.status(500).json({error:error.message});
    }
})
console.log('app is running(delete)payments')



app.get('/allcomplaints',async(req,res)=>{
       try{

            const connection=await getDbConnection()
            console.log(connection)
            const request=new sql.Request(connection)
            const query="select * from Complaints "
            const result=await request.query(query);
            res.json(result.recordset); // <-- add this

        }
        catch(error) {
                console.log(error);
                res.status(500).json({ error: error.message }); // send error back to client
        }

})
console.log('app is runnung(get)complaints')


app.post('/allcomplaints',async(req,res)=>{
    const{complaint_id,student_id,description,date_filed,status,}=req.body
    console.log(req.body)
    try{
        const connection=await getDbConnection()
        console.log(connection)
        const request=new sql.Request(connection)
        await request
        .input('complaint_id',sql.Int,complaint_id)
        .input('student_id',sql.Int,student_id)
        .input('description',sql.VarChar,description)
        .input('date_filed',sql.Date,date_filed)
        .input('status',sql.VarChar,status)
        .query('INSERT INTO Complaints VALUES (@complaint_id,@student_id,@description,@date_filed,@status)')
        res.json('complaint values added')
    }
    catch(error){
        console.log(error)
        res.status(500).json({error:error.message});
    }
})
console.log("app is running(post)complaints")
 

app.put('/allcomplaints',async(req,res)=>{
    const{complaint_id,student_id,description,date_filed,status}=req.body
    console.log(req.body)
    try{
        const connection=await getDbConnection()
        console.log(connection)
        const request=new sql.Request(connection)
        await request
        .input('complaint_id',sql.Int,complaint_id)
        .input('student_id',sql.Int,student_id)
        .input('description',sql.VarChar,description)
        .input('date_filed',sql.Date,date_filed)
        .input('status',sql.VarChar,status)
        .query('UPDATE Complaints SET student_id=@student_id,description=@description,date_filed=@date_filed,status=@status WHERE complaint_id=@complaint_id')
        res.json('complaints updated ')
    }
    catch(error){
        console.log(error)
        res.status(500).json({error:error.message});
    }
})
console.log("app is running(put)complaints")


app.delete('/allcomplaints',async(req,res)=>{
    const{complaint_id}=req.body
    console.log(req.body)
    try{
        const connection=await getDbConnection()
        console.log(connection)
        const request=new sql.Request(connection)
        await request
        .input('complaint_id',sql.Int,complaint_id)
        .query('DELETE FROM Complaints WHERE complaint_id=@complaint_id')
        res.json('complaint deleted')
    }
    catch(error){
        console.log(error)
        res.status(500).json({error:error.message});
    }
})
console.log("app is running(delete)complaints")