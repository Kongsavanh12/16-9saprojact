import { MembersInterface } from "../../interfaces/IMember";
import { MoviesInterface } from "../../interfaces/IMovie";  
import { ShowTimesInterface } from "../../interfaces/IShowtime";
import { TicketInterface } from "../../interfaces/ITicket"; // Import Interface ของ Tickets

const apiUrl = "http://localhost:8000/api";

// ฟังก์ชันเพื่อดึงข้อมูลสมาชิกทั้งหมด
async function GetMembers() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  let res = await fetch(`${apiUrl}/members`, requestOptions)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        return false;
      }
    });

  return res;
}

// ฟังก์ชันเพื่อดึงข้อมูลเพศทั้งหมด
async function GetGenders() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  let res = await fetch(`${apiUrl}/genders`, requestOptions)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        return false;
      }
    });

  return res;
}

// ฟังก์ชันเพื่อลบสมาชิกตาม ID
async function DeleteMemberByID(id: Number | undefined) {
  const requestOptions = {
    method: "DELETE",
  };

  let res = await fetch(`${apiUrl}/members/${id}`, requestOptions)
    .then((res) => {
      if (res.status === 200) {
        return true;
      } else {
        return false;
      }
    });

  return res;
}

// ฟังก์ชันเพื่อดึงข้อมูลสมาชิกตาม ID
async function GetMemberById(id: Number | undefined) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  let res = await fetch(`${apiUrl}/members/${id}`, requestOptions)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        return false;
      }
    });

  return res;
}

// ฟังก์ชันเพื่อสร้างสมาชิกใหม่
async function CreateMember(data: MembersInterface) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  let res = await fetch(`${apiUrl}/members`, requestOptions)
    .then((response) => response.json())
    .then((res) => {
      if (res.data) {
        return { status: true, message: res.data };
      } else {
        return { status: false, message: res.error };
      }
    });

  return res;
}

// ฟังก์ชันเพื่ออัปเดตข้อมูลสมาชิก
async function UpdateMember(data: MembersInterface) {
  const requestOptions = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  let res = await fetch(`${apiUrl}/members/${data.ID}`, requestOptions)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        return false;
      }
    });

  return res;
}

// ฟังก์ชันเพื่อดึงข้อมูลหนังทั้งหมด
async function GetMovies() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  let res = await fetch(`${apiUrl}/movies`, requestOptions)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        return false;
      }
    });

  return res;
}

// ฟังก์ชันเพื่อดึงข้อมูลหนังตาม ID
async function GetMovieById(id: Number | undefined) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  let res = await fetch(`${apiUrl}/movies/${id}`, requestOptions)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        return false;
      }
    });

  return res;
}

// ฟังก์ชันเพื่อสร้างหนังใหม่
async function CreateMovie(data: MoviesInterface) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  let res = await fetch(`${apiUrl}/movies`, requestOptions)
    .then((response) => response.json())
    .then((res) => {
      if (res.data) {
        return { status: true, message: res.data };
      } else {
        return { status: false, message: res.error };
      }
    });

  return res;
}

// ฟังก์ชันเพื่ออัปเดตข้อมูลหนัง
async function UpdateMovie(data: MoviesInterface) {
  const requestOptions = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  let res = await fetch(`${apiUrl}/movies/${data.ID}`, requestOptions)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        return false;
      }
    });

  return res;
}

// ฟังก์ชันเพื่อลบหนังตาม ID
async function DeleteMovieByID(id: Number | undefined) {
  const requestOptions = {
    method: "DELETE",
  };

  let res = await fetch(`${apiUrl}/movies/${id}`, requestOptions)
    .then((res) => {
      if (res.status === 200) {
        return true;
      } else {
        return false;
      }
    });

  return res;
}

// ฟังก์ชันเพื่อดึงข้อมูล Showtimes ทั้งหมด
async function GetShowtimes() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  let res = await fetch(`${apiUrl}/showtimes`, requestOptions)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        return false;
      }
    });

  return res;
}

// ฟังก์ชันเพื่อดึงข้อมูล Showtimes ตาม ID
async function GetShowtimeById(id: Number | undefined) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  let res = await fetch(`${apiUrl}/showtimes/${id}`, requestOptions)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        return false;
      }
    });

  return res;
}

// ฟังก์ชันเพื่อสร้าง Showtimes ใหม่
async function CreateShowtime(data: ShowTimesInterface) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  let res = await fetch(`${apiUrl}/showtimes`, requestOptions)
    .then((response) => response.json())
    .then((res) => {
      if (res.data) {
        return { status: true, message: res.data };
      } else {
        return { status: false, message: res.error };
      }
    });

  return res;
}

// ฟังก์ชันเพื่ออัปเดตข้อมูล Showtimes
async function UpdateShowtime(data: ShowTimesInterface) {
  const requestOptions = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  let res = await fetch(`${apiUrl}/showtimes/${data.ID}`, requestOptions)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        return false;
      }
    });

  return res;
}

// ฟังก์ชันเพื่อลบ Showtimes ตาม ID
async function DeleteShowtimeByID(id: Number | undefined) {
  const requestOptions = {
    method: "DELETE",
  };

  let res = await fetch(`${apiUrl}/showtimes/${id}`, requestOptions)
    .then((res) => {
      if (res.status === 200) {
        return true;
      } else {
        return false;
      }
    });

  return res;
}

// ฟังก์ชันเพื่อดึงข้อมูล Tickets ตาม ID
async function GetTicketById(id: Number | undefined) {
  if (!id || isNaN(Number(id))) {
    console.error("Invalid ID");
    return false;
  }

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem('token')}`,
    },
  };

  let res = await fetch(`${apiUrl}/tickets/${id}`, requestOptions)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        console.error(`Error: Received status code ${res.status}`);
        return false;
      }
    })
    .catch(error => {
      console.error('Error fetching ticket:', error);
      return false;
    });

  return res;
}



// ฟังก์ชันเพื่อทำการจองที่นั่ง
async function bookSeats(showtimeID: number, theaterID: number, memberID: number, seats: string[]) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem('token')}`, // หากต้องการใช้ token สำหรับ authen
    },
    body: JSON.stringify({
      showtime_id: showtimeID,  // แก้ไขให้ตรงกับ backend
      theater_id: theaterID,
      member_id: memberID,
      seats: seats,  // เปลี่ยนจาก seatIDs เป็น seats
    }),
  };

  let res = await fetch(`${apiUrl}/book-seats`, requestOptions) // เปลี่ยนเป็นเส้นทาง /book-seats
    .then((response) => response.json())
    .then((res) => {
      if (res.message === "Booking confirmed successfully") { // แก้เงื่อนไขเพื่อตรวจสอบ success message
        return { success: true, message: "Booking successful" };
      } else {
        return { success: false, message: res.error || "Booking failed" };
      }
    })
    .catch(error => {
      console.error('Error booking seats:', error);
      return { success: false, message: "Booking failed" };
    });

  return res;
}


// ฟังก์ชันเพื่อดึงข้อมูลที่นั่งที่ถูกจองสำหรับ Showtime และ Theater
async function GetBookedSeats(showtimeID: number, theaterID: number) {
  try {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(`${apiUrl}/booked-seats/${showtimeID}`, requestOptions);

    if (!response.ok) {
      console.error(`Error: Received status code ${response.status}`);
      return false; // ส่ง false หากการร้องขอล้มเหลว
    }

    const res = await response.json(); // แปลงข้อมูลจาก JSON
    return res; // ส่งผลลัพธ์ JSON กลับไป
  } catch (error) {
    console.error("Error fetching booked seats:", error); // จัดการข้อผิดพลาด
    return false; // ส่ง false หากมีข้อผิดพลาด
  }
}


export {
  GetTicketById,
  GetMembers,
  CreateMember,
  GetGenders,
  DeleteMemberByID,
  GetMemberById,
  UpdateMember,
  GetMovies,
  GetMovieById,
  CreateMovie,
  UpdateMovie,
  DeleteMovieByID,
  GetShowtimes,
  GetShowtimeById,
  CreateShowtime,
  UpdateShowtime,
  DeleteShowtimeByID,
  bookSeats,
  GetBookedSeats,  // เพิ่มฟังก์ชัน GetBookedSeats เพื่อดึงข้อมูลที่นั่งที่ถูกจอง
};