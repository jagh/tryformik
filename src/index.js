// import React from 'react';
// import { render } from 'react-dom';
// import App from './App';
//
// render(<App />, document.body.appendChild(document.createElement('div')));


import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';


const initialValues = {
  delegados: [
    {
      nombre: '',
      afiliacion: '',
    },
  ],
};

const InviteFriends = () => (
  <div>
    <h4>ASAMBLEA GENERAL ORDINARIA DE AFILIADOS - PODER DE REPRESENTACIÓN</h4>
    <h4>FONDO MUTUO DE INVERSIÓN CRC || NIT 890.301.647-6</h4>
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 700));
        alert(JSON.stringify(values, null, 2));
      }}
    >
    {({ values }) => (
      <Form>

      <div id="my-radio-group">
        <tr> ---------------------------------------------------------------------------------------------------------------------------------------------------------
        </tr>
      </div>
      <div role="group" aria-labelledby="my-radio-group">
          <div className="col">
              <label>
                <Field type="radio" name="picked" value="Asistiré" />
                Asistiré a la Asamblea General Ordinaria de Afiliados y me comprometo estar de
                principio a fin.
                </label>
          </div>
          <div className="col">
                <label>
                <Field type="radio" name="picked" value="Autorizo" />
                Autorizo para que otra persona me represente durante Asamblea General
                Ordinaria de Afiliados.
                </label>
          </div>
          <div  className="col">
          <tr> ---------------------------------------------------------------------------------------------------------------------------------------------------------
          </tr>
          </div>
        </div>


        <FieldArray name="delegados">
          {({ insert, remove, push }) => (
            <div>
              {values.delegados.length > 0 &&
                values.delegados.map((friend, index) => (
                  <div className="row" key={index}>
                    <div className="col">
                      <label htmlFor={`delegados.${index}.nombre`}>
                      Seleccione el representante:
                      </label>
                      <Field
                        name={`delegados.${index}.nombre`}
                        placeholder="Nombre de mi representante"
                        type="text"
                      />
                      <ErrorMessage
                        name={`delegados.${index}.nombre`}
                        component="div"
                        className="field-error"
                      />
                    </div>
                    <div className="col">
                      <label htmlFor={`delegados.${index}.afiliacion`}>
                      Afiliación del representante:
                      </label>
                      <Field
                        name={`delegados.${index}.afiliacion`}
                        placeholder="Afiliación del representante"
                        type="text"
                      />
                      <ErrorMessage
                        name={`delegados.${index}.name`}
                        component="div"
                        className="field-error"
                      />
                    </div>

                    <div className="col">
                      <button
                        type="button"
                        className="secondary"
                        onClick={() => remove(index)}
                      >
                        Suprimir
                      </button>

                    </div>

                  </div>
                ))}

              <button
                type="button"
                className="secondary"
                onClick={() => push({ nombre: '', afiliacion: '' })}
              >
                Adicionar delegado
              </button>
            </div>
          )}
        </FieldArray>


        <div>
        <tr> ---------------------------------------------------------------------------------------------------------------------------------------------------------
        </tr>
        <tr>
        Por medio del presente escrito confiero poder especial, amplio y suficiente a las personas abajo
        mencionada, para que me represente y asista en mi nombre a la Asamblea General Ordinaria
        de Afiliados, la cual se celebrará el día jueves 25 de marzo del año 2021, a las 08:30 a.m. de
        forma VIRTUAL a través de la tecnología de MICROSOFT TEAMS, o si ésta se realiza de forma
        presencial y/o semipresencial.
        </tr>
        <tr> ---------------------------------------------------------------------------------------------------------------------------------------------------------
        </tr>
        </div>


        <button type="submit">Enviar</button>
      </Form>
    )}
  </Formik>
</div>
);

ReactDOM.render(<InviteFriends />, document.getElementById('root'));


         // <div>{values.delegados.asistire=values.picked} </div>


// const initialValues = {
//   friends: [
//     {
//       name: '',
//       email: '',
//     },
//   ],
// };
//
// const InviteFriends = () => (
//   <div>
//     <h4>ASAMBLEA GENERAL ORDINARIA DE AFILIADOS - PODER DE REPRESENTACIÓN</h4>
//     <h3>FONDO MUTUO DE INVERSIÓN CRC</h3>
//     <h3>NIT 890.301.647-6</h3>
//     <Formik
//       initialValues={initialValues}
//       onSubmit={async (values) => {
//         await new Promise((r) => setTimeout(r, 700));
//         alert(JSON.stringify(values, null, 2));
//       }}
//     >
//       {({ values }) => (
//         <Form>
//           <FieldArray name="friends">
//             {({ insert, remove, push }) => (
//               <div>
//                 {values.friends.length > 0 &&
//                   values.friends.map((friend, index) => (
//                     <div className="row" key={index}>
//                       <div className="col">
//                         <label htmlFor={`friends.${index}.name`}>
//                         Seleccione el representante:
//                         </label>
//                         <Field
//                           name={`friends.${index}.name`}
//                           placeholder="Nombre de mi representante"
//                           type="text"
//                         />
//                         <ErrorMessage
//                           name={`friends.${index}.name`}
//                           component="div"
//                           className="field-error"
//                         />
//                       </div>
//                       <div className="col">
//                         <label htmlFor={`friends.${index}.email`}>
//                         Afiliación del representante:
//                         </label>
//                         <Field
//                           name={`friends.${index}.email`}
//                           placeholder="Afiliación del representante"
//                           type="text"
//                         />
//                         <ErrorMessage
//                           name={`friends.${index}.name`}
//                           component="div"
//                           className="field-error"
//                         />
//                       </div>
//
//                       <div className="col">
//                         <button
//                           type="button"
//                           className="secondary"
//                           onClick={() => remove(index)}
//                         >
//                           Suprimir
//                         </button>
//
//                       </div>
//
//                     </div>
//                   ))}
//                 <button
//                   type="button"
//                   className="secondary"
//                   onClick={() => push({ name: '', email: '' })}
//                 >
//                   Adicionar delegado
//                 </button>
//               </div>
//             )}
//           </FieldArray>
//           <button type="submit">Enviar</button>
//         </Form>
//       )}
//     </Formik>
//   </div>
// );
