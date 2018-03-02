module.exports = () => {

  let input = '';

  process.stdin.setEncoding( 'utf8' );

  process.stdin.on( 'readable', () => {

    const chunk = process.stdin.read();

    if ( chunk !== null ) {

      input += chunk;

    }

  });

  return new Promise ( resolve => {

    process.stdin.on( 'end', () => {

      resolve( input );

    } );

  } );

};
