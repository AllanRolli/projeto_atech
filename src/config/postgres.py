import psycopg2

def connect():   
   try:
      conn = None
      #Establishing the connection
      print('Connecting to the PostgreSQL database...')
      conn = psycopg2.connect(
      database="projeto_atech", user='docker', password='docker', host='localhost', port= '5432'
      )
      
      #Creating a cursor object using the cursor() method
      cursor = conn.cursor()  

      #Doping tables if already exists.
      cursor.execute("DROP TABLE IF EXISTS fly")
      cursor.execute("DROP TABLE IF EXISTS plane")
      cursor.execute("DROP TABLE IF EXISTS pilot")
      
      fly_table ='''CREATE TABLE fly(
         fly_id int NOT NULL,
         departure_time date NOT NULL,
         arrived_time date NOT NULL,
         status varchar(255),
         departure_city varchar(255),
         destiny_city varchar(255),
         PRIMARY KEY (fly_id)   
      )'''
      plane_table ='''CREATE TABLE plane(
         plane_id int NOT NULL,
         name varchar NOT NULL,
         PRIMARY KEY (plane_id)         
      )'''
      pilot_table ='''CREATE TABLE pilot(
         pilot_id int NOT NULL,
         name varchar NOT NULL,
         email varchar NOT NULL,
         password_hash varchar NOT NULL,
         PRIMARY KEY (pilot_id)         
      )'''
      cursor.execute(fly_table)
      print("Table fly successfully........")
      cursor.execute(plane_table)
      print("Table plane successfully........")
      cursor.execute(pilot_table)
      print("Table pilot successfully........")
      conn.commit()

      #Closing the connection
      cursor.close()
   except (Exception, psycopg2.DatabaseError) as error:
         print(error)
   finally:
         if conn is not None:
            conn.close()
            print('Database connection closed.')

if __name__ == '__main__':
    connect()