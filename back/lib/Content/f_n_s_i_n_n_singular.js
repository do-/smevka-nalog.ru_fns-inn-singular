const path = require ('path')

module.exports = {

////////////////////////////////////////////////////////////////////////////////

get_xsd_path_of_f_n_s_i_n_n_singular:

    function () {

		return path.join (__dirname, '..', 'Static/fns-inn-singular-ru-root.xsd')

    },

////////////////////////////////////////////////////////////////////////////////

get_request_of_f_n_s_i_n_n_singular:

    function () {

		return this.rq.data
    	
    },

////////////////////////////////////////////////////////////////////////////////

get_response_of_f_n_s_i_n_n_singular:

    function () {
    
    	const {rq: {data}} = this

		const k = [

			[7, 2, 4, 10, 3, 5, 9, 4, 6, 8],

			[3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8],

		]

    	let PhysicalPersonINN = '', s = [0, 0]
    	
    	for (let i = 0; i < 10; i ++) {
    	
    		const d = Math.floor (10 * Math.random ())
    	
			for (let j = 0; j < 2; j ++) s [j] += k [j] [i] * d
	
    		PhysicalPersonINN += String (d)
    	
    	}
    	
    	const d = s [0] % 11 % 10; s [1] += k [1] [10] * d; PhysicalPersonINN += String (d)
    	
    	PhysicalPersonINN += String (s [1] % 11 % 10)

    	return {
    	
    		FNSINNSingularResponse: {
    			"ИННФЛ": PhysicalPersonINN,
    			"ИдЗапрос": data ['ИдЗапрос'],
    		},

    	}

    },
        
}