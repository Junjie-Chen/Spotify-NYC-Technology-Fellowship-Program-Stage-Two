import React from 'react';
import {Weeks} from '../components';

const Calendar = () => (
  <section>
    <div className="table-responsive">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Sun</th>
            <th scope="col">Mon</th>
            <th scope="col">Tue</th>
            <th scope="col">Wed</th>
            <th scope="col">Thu</th>
            <th scope="col">Fri</th>
            <th scope="col">Sat</th>
          </tr>
        </thead>

        <Weeks />
      </table>
    </div>
  </section>
);

export default Calendar;
