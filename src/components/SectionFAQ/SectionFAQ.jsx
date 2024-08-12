import React from "react";
import FAQ from "../FAQ/FAQ";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Container } from "@mui/material";

function SectionFAQ() {
  return (
    <>
      <SectionTitle
        text={"Preguntas Frecuentes"}
        textSx={{
          fontSize: { xs: "24px", sm: "32px", md: "42px" },
          marginTop: 0,
        }}
      />

      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          mb: 5,
          width: "100%",
          px: { xs: 2, md: 4 },
        }}
      >
        <FAQ
          title="Extravié el certificado de preparatoria."
          content="Solicitar una copia en tu preparatoria."
        />
        <FAQ
          title="No puedo descargar la pre-solicitud"
          content="Tienes que esperar el correo de escolares solicitando la pre-solicitud para descargarla en la plataforma <a href='https://llave.uabc.edu.mx/auth/login?SAMLRequest=lVLBbtswDP0VQXdbsuegjRCn8BYUC9CtRu3usBsj060KWcpEOej%2Bfo6TbN1hBXYU9R7f4yNXN6%2BDZQcMZLwreZZKztBp3xn3VPLH9ja55jfrFcFg872qxvjsHvDHiBTZRHSkTj8lH4NTHsiQcjAgqahVU325U3kq1T746LW3nFVEGOIk9ck7GgcMDYaD0fj4cFfy5xj3pIQgY0w6wk6nw6s49hdNcy%2FAGiDRYQ%2BjjdXxwdlm8mEcxNn7hW4tHPDEx2489oDJtrD%2ByTjObn3QOM9R8h4sIWfbTcmhWGYvy2spPyz7BWBhOt29LPQO8l4aPWGoBiJzwD8sohG3jiK4WPJc5kUir5JctnKhFoXK8rS4Kr5zVp%2BH%2F2jcKdT3ktqdQKQ%2Bt22d1PdNy9m3y3ImAD%2BvQs3q4e0O3m8Ml%2BD5%2Bn9jXom3kr9v4euksd3U3hr985jqAPHfFrI0myumS%2FoZqnAAY6uuC0jExfos8veJrX8B&SigAlg=http%3A%2F%2Fwww.w3.org%2F2000%2F09%2Fxmldsig%23rsa-sha1&Signature=iZlqw9YW9%2FQGUldGckiAAU66IU6u18R7OT8dWB0uPHhBOsjkye2bfCNkppTIlYkYkA7KfhsWqK6AxY2hRWWlNzwSwQN1xt5tIgIbNZLNbowEAvChxkWt2HWYxYwrP9vEplwL%2FbW2KGPL0mg4oPTl4h6oGd9EyM5%2BOirCGUW5%2BP5TRImJBBIGLnhS6OK7WysGKGpQ2QvAmbrh4HpHcv7x8XBt%2BkI%2F4w8i3mf8C4JZsibzyLnW%2B8%2BWAUc0roasiZn%2FfiK77TER0V%2BF3q%2BFnD5VvAAlDYih0pIukQaoH9hP3qEcxnqOVSphmPyKAooOgiLe1pNeVBRslxK08yutW%2FWiKQ%3D%3D' target='_blank' rel='noopener noreferrer'> siii.uabc.mx.</a>"
        />
        <FAQ
          title="Después de que tenga en físico mi certificado de pasante, ¿qué hago?"
          content="Continúa con el paso 2 de titulación ([verificación de documentos](/pasos-titulacion))."
        />

        <FAQ
          title="En donde descargo la constancia del servicio social profesional"
          content="En la plataforma del <a href='https://llave.uabc.edu.mx/auth/login?SAMLRequest=nVLBbtswDP0VQXdbitG0jRCncBcUDdCtRu320BttM7YGWUpFOej%2Bfo6TbN1hPfRI8pGPfI%2FLm%2FfesD160s6mfBZLztDWrtG2TflzeRdd85vVkqA3yU5lQ%2BjsE74NSIGNjZbUsZLywVvlgDQpCz2SCrUqsu8PKoml2nkXXO0MZxkR%2BjBSfXOWhh59gX6va3x%2Bekh5F8KOlBA05bQjV2sw8QBVHffv4sAkiuJRgNFAosEtDCZkh4Cz9biRthCmK86DjIE9HvuxGQ4zYDxAGNdqy9md8zVOF6V8C4aQs8065dBuF03VSYDFZdfNr5MxauUFLn5WVTtCKAcivce%2FTUQDbiwFsCHliUwuInkVJbKUczW%2FVLOreDGXr5zlJxVutT2q%2B5lk1RFE6r4s8yh%2FLErOXs4ujQB%2B8kRN7P6jGZ8PhrMDfPV1vZfiI%2Fmf9%2Fgxsm3WuTO6%2FnWQt4fw%2F2Vm8WzK6CbaTlCFPWiTNY1HIi5WJ5J%2Fv271Gw%3D%3D&SigAlg=http%3A%2F%2Fwww.w3.org%2F2000%2F09%2Fxmldsig%23rsa-sha1&Signature=bcRz2KbcwvkpkhC%2Be02Ivvr%2FyXQuFedCSDUJ%2Bz437I0D0kfPVIwmjeW%2BNpgPqLNwG%2FPYkRIZJtzqipKXJmFMN91HH9RiLw6KCJnJHLapwqNgW%2Fu3mQvdtOs9URhcR%2FtzsepyY3fOxmn9%2BZWPmBwH1X7o8lnng64sJizJMLZSX4k5RefyrnW4HWdoGuAAihk9FiIp6%2BDy2v3wKx8yur9PUWZ3%2Bc43z7AWmn2sXlSo2jykNkV33Gzedg1P%2Bxiv9MwaC3Ia4fjlrh4OaKDJN4l%2BP%2Fby5bnjkNe%2FtuVDOy46EftvJkImdiGPN%2FVttDB0gs802kQP3eCYTkTyS5GvAtq3NQ%3D%3D' target='_blank' rel='noopener noreferrer'> serviciosocial.uabc.mx.</a>"
        />
        <FAQ
          title="En donde entrego los documentos del paso 3 de titulación"
          content="En el cubículo 2 de la FTYM, dejarlos en el buzón ([enlace del paso 3](/paso-tres-titulacion)) horario de lunes a viernes de 7:00 am a 9:00 pm."
        />
        <FAQ
          title="Tengo dudas del proceso de titulación deseo agendar cita"
          content="Para agendar cita al correo titulacion.ftmtij@uabc.edu.mx."
        />
        <FAQ
          title="Quiero una cartera de boletos para apoyar a mi facultad"
          content="Agendar cita al correo titulacion.ftmtij@uabc.edu.mx para recoger los boletos en el cubículo 2."
        />
        <FAQ
          title="En donde realizó el pago de los boletos de sorteos"
          content="En sorteos."
        />
        <FAQ
          title="En donde realizo el pago de responsabilidad social universitaria"
          content="Se paga en caja (edificio de vicerrectoría- tesorería, 2do piso)."
        />
        <FAQ
          title="En donde pago la mención honorífica"
          content="Se paga en caja (edificio de vicerrectoría- tesorería, 2do piso)."
        />
        <FAQ
          title="No tengo liberado el inglés, ¿en donde presento el examen de inglés?"
          content="Revisar las fechas de examen de inglés para egreso en la página de idiomas <a href='https://idiomas.uabc.mx/' target='_blank' rel='noopener noreferrer'>https://idiomas.uabc.mx/.<a/>"
        />
        <FAQ
          title="Qué necesito para poder participar en un acto académico?"
          content="El paso 1 de titulación ([Certificado de pasante](/pasos-titulacion))."
        />
        <FAQ
          title="Qué necesito para poder asistir en la ceremonia de potenciales a egresar?"
          content="Estar en 8vo semestre."
        />
      </Container>
    </>
  );
}

export default SectionFAQ;
